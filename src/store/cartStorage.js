const STORAGE_KEY = 'react-shop:cart';
// Ключ, который использовали прежние версии приложения.
const LEGACY_STORAGE_KEY = 'product';

const isCartItem = item => (
    Boolean(item)
    && typeof item.id !== 'undefined'
    && typeof item.count === 'number'
    && Array.isArray(item.images)
);

export const loadCartItems = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
        const items = JSON.parse(raw);

        return Array.isArray(items) ? items.filter(isCartItem) : [];
    } catch {
        // Повреждённые данные в localStorage не должны ломать запуск приложения.
        return [];
    }
};

export const saveCartItems = items => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
        // localStorage может быть недоступен (приватный режим, переполнение квоты).
    }
};
