import React, {FC} from 'react';

interface ListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)} {/* we can change default callback to our callback renderItem */}
        </div>
    );
}