type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  id?: string;
};

export default function List<T>(props: ListProps<T>) {
  return (
    <>
      <div className={props.className} id={props.id}>
        {props.items.map(props.renderItem)}
      </div>
    </>
  );
}
