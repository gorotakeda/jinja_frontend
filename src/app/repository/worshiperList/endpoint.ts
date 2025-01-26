import axios from 'axios';
import { Worshiper } from '@/app/types/worshiper/type';

export const getWorshiperList = async (): Promise<Worshiper[]> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/worshipers`);
    return response.data;
};
