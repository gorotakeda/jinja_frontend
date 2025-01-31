import axios from 'axios';
import { Worshiper } from '@/app/types/worshiper/type';

export const deleteWorshiper = async (id: number): Promise<Worshiper> => {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/worshipers/${id}/delete`);
    return response.data;
};
