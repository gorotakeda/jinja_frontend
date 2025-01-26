import axios from 'axios';
import { Worshiper } from '@/app/types/worshiper/type';

export const getWorshiperDetail = async (id: number): Promise<Worshiper> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/worshipers/${id}`);
    return response.data;
};
