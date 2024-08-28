import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartContextType {
    cart: any[]; // Reemplaza con tu tipo de elemento de carrito real
    cartCount: number;
    addToCart: (product: any) => void;
    removeFromCart: (id: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<any[]>([]);

    // Cargar el carrito desde localStorage cuando se monta el componente
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Guardar el carrito en localStorage cada vez que se actualiza
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: any) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const removeFromCart = (id: any) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const cartCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
