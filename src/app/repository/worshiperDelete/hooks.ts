import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorshiper as deleteWorshiperApi } from './endpoint';

export const useWorshiperDelete = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: (id: number) => deleteWorshiperApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['worshiperList'] });
        },
    });
    return { deleteWorshiper: mutate };
};