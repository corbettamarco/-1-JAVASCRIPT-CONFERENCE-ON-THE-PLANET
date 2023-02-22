import { renderHook } from "@testing-library/react";
import { getAll } from "../API/getAll";
import { useAll } from "../hooks/useAll";

// Mock di getAll
jest.mock('../API/getAll', () => ({
    getAll: jest.fn(),
}));

// Mock di useQuery 
jest.mock('react-query', () => ({
    useQuery: jest.fn(),
}));

describe('test useAll', () => {
    test('controllo return corretto useAll', async () => {
        const query = 'events';
        const params = 'events/1';
        const data = ['data'];

        (getAll as jest.Mock).mockReturnValue(data);
        // Chiamata useAll 
        renderHook(() => useAll(query, params));

        // Controllo return useAll
       await expect(() => useAll(query,params)).resolves.toBe(data);
    });
});