'use client';

import { LoadingSpinner } from '@/app/features/common/loading/loading';
import { useWorshiperDetail } from '@/app/repository/worshiperDetail/hooks';

type Props = {
  id: number;
};

export const WorshiperDetail = ({ id }: Props) => {
  const { data: worshiper, isLoading } = useWorshiperDetail(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!worshiper) {
    return <div>参拝者が見つかりませんでした</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <dl className="grid grid-cols-2 gap-4">
          {/* 基本情報 */}
          <div className="col-span-2 border-b pb-4 mb-4">
            <h3 className="text-lg font-medium mb-4">基本情報</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">氏名</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {worshiper.last_name} {worshiper.first_name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">フリガナ</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {worshiper.last_name_kana} {worshiper.first_name_kana}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">性別</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {worshiper.gender === 'male' ? '男性' : '女性'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">生年月日</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {worshiper.birthday ? new Date(worshiper.birthday).toLocaleDateString('ja-JP') : '-'}
                </dd>
              </div>
            </div>
          </div>

          {/* 連絡先情報 */}
          <div className="col-span-2 border-b pb-4 mb-4">
            <h3 className="text-lg font-medium mb-4">連絡先情報</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">電話番号</dt>
                <dd className="mt-1 text-sm text-gray-900">{worshiper.phone_number || '-'}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
                <dd className="mt-1 text-sm text-gray-900">{worshiper.email || '-'}</dd>
              </div>
            </div>
          </div>

          {/* 住所情報 */}
        <div className="col-span-2 border-b pb-4 mb-4">
            <h3 className="text-lg font-medium mb-4">住所情報</h3>
            <div>
                <dd className="mt-1 text-sm text-gray-900">
                〒{worshiper.post_code || '-'}
                <br />
                {worshiper.prefecture || '-'}{worshiper.city || '-'}{worshiper.street_address || '-'}
                {worshiper.building_name && <span>（{worshiper.building_name}）</span>}
                </dd>
            </div>
        </div>

          {/* 参拝情報 */}
          <div className="col-span-2 border-b pb-4 mb-4">
            <h3 className="text-lg font-medium mb-4">参拝情報</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">参拝日</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {worshiper.visited_day ? new Date(worshiper.visited_day).toLocaleDateString('ja-JP') : '-'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">備考</dt>
                <dd className="mt-1 text-sm text-gray-900">{worshiper.note || '-'}</dd>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};