export function createString({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div class="photo-card card">
  <a href=${largeImageURL}><img src="${webformatURL}" alt="${tags}"  height="220" loading="lazy" class="card-img-top"  /></a>
  
  <div class="info row  row-cols-4">
    <p style='font-size: 12px;' class="info-item col padding-card ">
      <b>Likes</b> <br>${likes}
    </p>
    <p style='font-size: 12px;' class="info-item col padding-card">
      <b>Views</b> <br>${views}
    </p>
    <p style='font-size: 12px;' class="info-item col padding-card">
      <b>Comments</b> <br>${comments}
    </p>
    <p style='font-size: 12px;' class="info-item col padding-card">
      <b>Downloads</b <br>${downloads}
    </p>
  </div>
</div>`;
}

// {
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }
