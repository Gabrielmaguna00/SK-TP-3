const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const categoryToPost = async (category, post_id) => {
  const _categorytopost = await prisma.categoryToPost.create({
    data:{
      A:category,
      B:post_id
    }
  })
};

module.exports = {
  categoryToPost,
};
