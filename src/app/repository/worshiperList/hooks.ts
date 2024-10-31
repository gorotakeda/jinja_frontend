import { useQuery } from '@tanstack/react-query';
import { getWorshiperList } from './endpoint';

export const useWorshiperList = () => {
    return useQuery({
        queryKey: ['worshiperList'],
        queryFn: async () => {
            return getWorshiperList();
        },
        retry: false,
    });
};