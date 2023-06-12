import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({ params }) => {

  const data = await getData(params.id) 

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minima
          quae ipsum, commodi blanditiis aut dolorem ad accusamus necessitatibus
          assumenda, facilis cum temporibus sed eius nesciunt placeat voluptates
          excepturi id doloribus ab eos cupiditate amet repellendus veritatis?
          Laudantium, necessitatibus minus deserunt qui quasi sequi assumenda
          exercitationem officia blanditiis dolor. Facere, quia velit!
          <br />
          <br />
          Ducimus itaque enim odio dignissimos eveniet ad dicta impedit ullam
          hic dolorum voluptatem qui, autem illum laborum eos? Quaerat
          consequuntur sequi odit voluptatum perferendis perspiciatis iusto
          animi ducimus molestias architecto, expedita accusantium, veritatis
          numquam reiciendis officia. Ad quam molestiae unde iusto maiores
          ratione delectus, assumenda nobis nam molestias harum obcaecati
          nostrum? Excepturi harum dolorem tenetur magnam saepe aliquid tempore
          facilis, animi, porro sed optio delectus repudiandae, et nobis rem
          quaerat quo quia. Tempore, repellendus iste error quae nihil beatae.
          <br />
          <br />
          Doloremque nihil excepturi, et facilis optio dicta odio molestiae ab
          distinctio quas saepe est eum sed labore minima voluptates
          reprehenderit eaque! Quis, voluptates et? Dolore repellendus nisi
          nihil soluta ab nemo laudantium nam temporibus distinctio sunt.
          Maiores culpa amet qui ea nobis deleniti quas nesciunt ullam
          laudantium, neque deserunt minus sit dolore laboriosam ipsum.
          Consequuntur rerum voluptatibus placeat unde omnis aliquid vero
          assumenda in exercitationem, doloribus corrupti at commodi!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
