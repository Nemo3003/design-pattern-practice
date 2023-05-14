import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    /*const user = await prisma.user.create({data:{name: 'Sally'}})
    console.log(user)
    const users = await prisma.user.findMany();
    console.log(users)*/
     const user = await prisma.user.create({
        data: {
            name: "ulisesf",
            email: "uli@sjksjgg.com",
            age: 23,
        },
    })
        console.log(user)
}

main()
    .catch(err => {
        console.error(err.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })