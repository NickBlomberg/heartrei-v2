import ContentfulApi from '@/contentful/Api'

export default class ContentfulTherapy extends ContentfulApi {
  static async getAll() {
    const query = `{
      therapyCollection {
        total
        items {
          sys {
            id
          }
          title
          slug
          description
        }
      }
    }`

    const response = await this.callContentful(query)

    const allTherapies = response.data.therapyCollection.items
      ? response.data.therapyCollection.items
      : []

    return allTherapies
  }
}
