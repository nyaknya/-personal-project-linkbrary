export default function NotSavedLink() {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    border: '1px solid #eaeaea',
    borderRadius: '15px',
  };

  return (
    <div className="container" style={style}>
      저장된 링크가 없습니다.
    </div>
  );
}
