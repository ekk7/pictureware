export const galleryQuery = `
  *[_type == "gallery"][0]{
    title,
    images[]{
      caption,
      alt,
      image
    }
  }
`;

export const aboutQuery = `
  *[_type == "about"][0]{
    title,
    content,
    profileImage
  }
`;

export const contactQuery = `
  *[_type == "contact"][0]{
    email,
    phone,
    address
  }
`;

export const headerQuery = `
*[_type == "header"][0]{
  logo,
  navLinks[]->{
    title,
    "slug": slug.current
  }
}
`;

export const footerQuery = `
*[_type == "footer"][0]{
  title,
  columns[]{
    heading,
    content
  },
  image,
}
`
