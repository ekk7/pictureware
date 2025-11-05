import page from '../schemas/page'
import post from '../schemas/post.js'
import gallery from '../schemas/gallery.js'
import footer from '../schemas/footer.js'
import header from '../schemas/header.js'

// Object types
import cta from '../schemas/objects/cta'
import imageBlock from '../schemas/objects/imageBlock'
import galleryReference from '../schemas/objects/galleryReference'

export const schemaTypes = [page, gallery, header, footer, cta, imageBlock, galleryReference]
