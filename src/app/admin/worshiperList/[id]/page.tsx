'use client';

import { useParams } from 'next/navigation';
import { WorshiperDetail } from '@/app/features/routes/admin/worshiperDetail/worshiperDetail';

const WorshiperDetailPage = () => {
  const params = useParams();
  const id = Number(params.id);

  return <WorshiperDetail id={id} />;
};

export default WorshiperDetailPage;