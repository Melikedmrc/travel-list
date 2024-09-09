import Items from "./Items";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <ul className="list">
            {items.map((item) => (
                <Items
                    item={item}
                    onDeleteItem={onDeleteItem}
                    onToggleItem={onToggleItem}
                    key={item.id}
                />
            ))}
        </ul>
    );
}
