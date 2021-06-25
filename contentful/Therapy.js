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

  static async getBySlug(slug) {
    const query = `{
      therapyCollection(limit: 1, where: {slug: "${slug}"}) {
        items {
          title
          description
        }
      }
    }`

    const response = await this.callContentful(query)

    const therapy = response.data.therapyCollection.items
      ? response.data.therapyCollection.items
      : []

    return therapy[0]
  }

  static async getAllSlugs() {
    const query = `{
      therapyCollection {
        items {
          slug
        }
      }
    }`

    const response = await this.callContentful(query)

    const slugs = response.data.therapyCollection.items
      ? response.data.therapyCollection.items.map((item) => item.slug)
      : []

    return slugs
  }
}
