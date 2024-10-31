'use client';

import { LoadingSpinner } from '@/app/features/common/loading/loading';
import { useWorshiperList } from '@/app/repository/worshiperList/hooks';

export const AdminHome = () => {
  const { data: worshiperList, isLoading } = useWorshiperList();

  console.log(worshiperList);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold text-center mt-10">参拝者一覧</h2>
      <main className="flex justify-center mt-10">
        <table className="w-3/4 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">氏名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">フリガナ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">性別</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">生年月日</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">電話番号</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">メール</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">住所</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">参拝日</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {worshiperList?.map((worshiper) => (
              <tr key={worshiper.id}>
                <td className="px-6 py-4 whitespace-nowrap">{worshiper.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {worshiper.last_name} {worshiper.first_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {worshiper.last_name_kana} {worshiper.first_name_kana}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {worshiper.gender === 'male' ? '男性' : '女性'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {worshiper.birthday ? new Date(worshiper.birthday).toLocaleDateString('ja-JP') : ''}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{worshiper.phone_number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{worshiper.email}</td>
                <td className="px-6 py-4 whitespace-normal">
                  〒{worshiper.post_code}<br />
                  {worshiper.prefecture}{worshiper.city}{worshiper.street_address_1}
                  {worshiper.street_address_2 && <><br />{worshiper.street_address_2}</>}
                  {worshiper.building_name && <><br />{worshiper.building_name}</>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {worshiper.visited_day ? new Date(worshiper.visited_day).toLocaleDateString('ja-JP') : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
