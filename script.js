let post = document.getElementById("post1"); 
let postsBox = document.getElementById("allposts") 
let li = 0;
let imgurls = [ 
    "https://sh1rroo.github.io/biosite/myselfphoto.png", 
    "https://sh1rroo.github.io/biosite/yalegenda.jfif", 
    "https://ir.ozone.ru/s3/multimedia-o/c1000/6562172424.jpg", 
    "https://llfalmaty.kz/upload/team_logo/68232_133886_23.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%4]) 
 
    postsBox.appendChild(newpost); 
}

let likeCount = 0;
        let dislikeCount = 0;
        let likeActive = false;
        let dislikeActive = false;
        function toggleLike() {
            if (likeActive) {
                return;
            }

            if (dislikeActive) {
                dislikeCount--;
                document.getElementById('dislikeCount').innerText = dislikeCount;
                dislikeActive = false;
            }

            likeCount++;
            document.getElementById('likeCount').innerText = likeCount;
            likeActive = true;
        }

        function toggleDislike() {
            if (dislikeActive) {
                return;
            }

            if (likeActive) {
                likeCount--;
                document.getElementById('likeCount').innerText = likeCount;
                likeActive = false;
            }

            dislikeCount++;
            document.getElementById('dislikeCount').innerText = dislikeCount;
            dislikeActive = true;
        }

function addComment(event) {
    event.preventDefault(); 
    const form = event.target;
    const commentText = form.comment.value;
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p>${commentText}</p><small>Posted just now</small>`;
    document.querySelector('.comments-list').appendChild(newComment);
    form.comment.value = '';
}