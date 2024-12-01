export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('클립보드에 복사되었습니다.');
  } catch (error) {
    console.error('클립보드 복사에 실패했습니다.', error);
  }
};

export default copyToClipboard;
