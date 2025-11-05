import { StructureBuilder } from 'sanity/structure'

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Header singleton
      S.listItem()
      .title('Header')
      .child(S.document().schemaType('header').documentId('headerSingleton')),

      // 🏠 Pages
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      // 🖼️ Gallery
      S.listItem()
        .title('Gallery')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),

      // 🦶 Footer
      // Footer singleton
      S.listItem()
        .title('Footer')
        .child(S.document().schemaType('footer').documentId('footerSingleton')),

      // 👇 Include any other singleton or content types
      ...S.documentTypeListItems().filter(
        (item) => !['page', 'gallery', 'footer'].includes(item.getId())
      ),
    ])