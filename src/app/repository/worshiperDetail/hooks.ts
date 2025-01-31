import { useQuery } from '@tanstack/react-query';
import { getWorshiperDetail } from './endpoint';

export const useWorshiperDetail = (id: number) => {
    return useQuery({
        queryKey: ['worshiperDetail', id],
        queryFn: async () => {
            return getWorshiperDetail(id);
        },
        retry: false,
    });
};