export default function formatDate(stringDate) {
  return new Date(stringDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
