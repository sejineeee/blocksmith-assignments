const EmptyMessage = ({ message }: { message: string }): JSX.Element => {
  return (
    <div className="empty-message-wrapper">
      <p className="empty-message">{message}</p>
    </div>
  );
};

export default EmptyMessage;
