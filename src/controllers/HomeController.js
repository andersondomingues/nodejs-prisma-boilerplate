const { PrismaClient, prisma } = require('@prisma/client');
const prismaClient = new PrismaClient();

async function home(req, res, next){
  return res.send("valjsaihsidh");
}


async function getPosts(req, res, next){

  const { userId } = req.query;

  const posts = await prismaClient.post.findMany({
    where: {
      authorId: parseInt(userId),
    },
    include: {
      author : true
    }
  });

  return res.json(posts)
}


async function getUsers(req, res, next){

  // const create = await prismaClient.user.create({
  //   data: {
  //     email: "test@user.com",
  //     name: "Test User"
  //   }
  // })

  // const create = await prismaClient.post.create({
  //   data: {
  //     title: "This is a post",
  //     authorId: 1,
  //     content: "Lorem ipsum lalalal la lal al la la aaaa.",
  //     published: true
  //   }
  // })

  

  return res.send("asdasdasdsa");
}

module.exports = {
  home, getUsers, getPosts
}

