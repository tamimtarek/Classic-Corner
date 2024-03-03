const postContainer = document.getElementById('post-container');
const titleContainer = document.getElementById("title-container");
const latestPostsContainer = document.getElementById("latest-post");
// All news
const allNews = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  
  const data = await res.json();
  data.posts.forEach((item) => {
      let active = '';
      if(item.isActive === true){
          active = '<span class="indicator-item badge bg-[#10B981]"></span>';
        }
        else{
            active = '<span class="indicator-item badge bg-[#FF3434]"></span>';
        }
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex gap-4 p-10 bg-[#F3F3F5] rounded-2xl">
        <div>
        <div class="avatar indicator">
        ${active}
        <div class="w-20 h-20 rounded-lg">
        <img alt="Tailwind CSS examples" src="${item.image}" />
        </div>
        </div>
        </div>
        <div class="">
        <div class="flex gap-3">
        <h3>${item.category}</h3>
        <h3>Author: ${item.author.name}</h3>
        </div>
        <h4 id="post-title" class="font-bold text-xl text-[#12132D] mt-3">${item.title}</h4>
        <p class="text-[#12132D99] mt-4">${item.description}</p>
        <hr class="bg-[#12132D40] mt-4">
        <div class="flex justify-between mt-5">
        <div class="flex gap-2 lg:gap-4">
        <img src="icon/messege.png" alt=""><h3>${item.comment_count}</h3>
        <img id="post-view" src="icon/eye.png" alt=""><h3>${item.view_count}</h3>
        <img src="icon/clock.png" alt=""><h3>${item.posted_time}min</h3>
        </div>
        <button id="post-btn" onclick = "loadBtn()" class="btn btn-xs"><img src="icon/email 1.png" alt=""></button>
        </div>
        </div>
        </div>
        `;
        
        postContainer.appendChild(div);
    })
}

const loadBtn = async() => {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/posts"
    );
    
    const data = await res.json();
    data.posts.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class= "bg-white flex justify-between p-3 rounded-lg">
            <h3>${item.title}</h3>
            <h3>${item.view_count}</h3>
        `;
       titleContainer.appendChild(div);
    })
    
}

const latestPosts = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    data.forEach((item) =>{
        const div = document.createElement('div');
        console.log(item)
        div.innerHTML = `
        <div class="card w-96  bg-base-100 shadow-xl">
        <figure><img class="p-6" src="${item.cover_image}" alt="" /></figure>
        <div class="card-body">
                <h3 class="text-[#12132D99] flex gap-2"><img src="icon/calander.png" alt=""> ${item.author.posted_date?item.author.posted_date:"No publish date"}</h3>
              <h2 class="card-title text-[#12132D] font-extrabold">
                ${item.title}
              </h2>
              <p class="text-[#12132D99]">${item.description}</p>
              <div>
                <div class="flex gap-2 items-center">
                    <div>
                        <img class="w-16 h-16 rounded-full" src="${item.profile_image}" alt="">
                    </div>
                    <div>
                    <h5 class="text-[#12132D] font-bold">${item.author.name}</h5>
                    <h5 class="text-[#12132D99]">${item.author.designation?item.author.designation: "Unknown"}</h5>
                    </div>
                </div>
            </div>
         </div>
        </div>
        `;
        latestPostsContainer.appendChild(div);
    })
}

allNews()
latestPosts()

