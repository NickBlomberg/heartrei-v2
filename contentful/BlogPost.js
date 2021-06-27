import ContentfulApi from '@/contentful/Api'
import { Config } from '../utils/Config'

export default class ContentfulBlogPost extends ContentfulApi {
  static async getTotal() {
    const query = `{
      blogPostCollection {
        total
      }
    }`

    const response = await this.callContentful(query)
    const totalPosts = response.data.blogPostCollection.total
      ? response.data.blogPostCollection.total
      : 0

    return totalPosts
  }

  static async getPaginatedPostSummaries(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1
    const skip =
      skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0

    const query = `{
      blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
        total
        items {
          sys {
            id
          }
          title
          slug
          date
          excerpt
          content
        }
      }
    }`

    const response = await this.callContentful(query)

    const paginatedPostSummaries = response.data.blogPostCollection
      ? response.data.blogPostCollection
      : { total: 0, items: [] }

    return paginatedPostSummaries
  }

  static async getAllSlugs() {
    const query = `{
      blogPostCollection {
        items {
          slug
        }
      }
    }`

    const response = await this.callContentful(query)

    const slugs = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items.map((item) => item.slug)
      : []

    return slugs
  }

  static async getBySlug(slug) {
    const query = `{
      blogPostCollection(limit: 1,  where: {slug: "${slug}"}) {
        items {
          sys {
            id
          }
          title
          slug
          date
          content
        }
      }
    }`

    const response = await this.callContentful(query)

    const post = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
      : []

    return post.pop()
  }
}
