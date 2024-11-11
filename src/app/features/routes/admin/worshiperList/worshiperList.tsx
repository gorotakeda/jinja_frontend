'use client';

import { LoadingSpinner } from '@/app/features/common/loading/loading';
import { Pagination } from '@/app/features/common/pagination/pagination';
import { useWorshiperList } from '@/app/repository/worshiperList/hooks';
import { useState } from 'react';

export const WorshiperList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { data: worshiperList, isLoading } = useWorshiperList();

  const totalPages = Math.ceil((worshiperList?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWorshipers = worshiperList?.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold text-center mt-10">参拝者一覧</h2>
      <main className="flex justify-center mt-10">
        <div className="w-3/4">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">氏名</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">フリガナ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">性別</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">生年月日</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">電話番号</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">メール</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">参拝日</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentWorshipers?.map((worshiper) => (
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    {worshiper.visited_day ? new Date(worshiper.visited_day).toLocaleDateString('ja-JP') : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </main>
    </div>
  );
};
