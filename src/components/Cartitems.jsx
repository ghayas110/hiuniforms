// components/CartItem.js
const CartItem = ({ item }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500">By {item.author}</p>
                    <div className="text-sm text-yellow-500">
                        {item.rating} ⭐ ({item.reviews} ratings)
                    </div>
                    <p className="text-sm text-gray-500">
                        {item.hours} total hours • {item.lectures} lectures • {item.level}
                    </p>
                </div>
            </div>
            <div>
                <p className="text-lg font-bold text-[#A7D9E6]">${item.price}</p>
                <p className="text-sm text-gray-500 line-through">${item.originalPrice}</p>
            </div>
        </div>
    );
};

export default CartItem;
