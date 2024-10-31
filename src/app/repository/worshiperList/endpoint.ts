import axios from 'axios';
import { Worshiper } from '@/app/types/worshiper/type';

export const getWorshiperList = async (): Promise<Worshiper[]> => {
    const response = await axios.get('http://localhost:8000/api/worshipers');
    return response.data;
};
