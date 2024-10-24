export default function sliceDate(createdAt: string | Date | undefined) {
  const stringValue =
    typeof createdAt === 'string' ? createdAt : createdAt?.toISOString();
  const postDate = stringValue?.slice(0, 9).replaceAll('-', '. ');
  return postDate;
}
