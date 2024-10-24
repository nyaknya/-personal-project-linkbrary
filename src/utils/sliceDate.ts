export default function sliceDate(createdAt: string | Date | undefined) {
  const stringValue =
    typeof createdAt === 'string' ? createdAt : createdAt?.toISOString();
  const postDate = stringValue?.substring(0, 10).replaceAll(/-/g, '. ');
  return postDate;
}
