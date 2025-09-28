export function albumCount(albumsObject) {
  if (!Array.isArray(albumsObject)) {
    console.error("There is no Albums Object");
    return 0;
  } else {
    return albumsObject.length;
  }
}

export function albums(albumsObject) {
  if (!Array.isArray(albumsObject)) {
    console.error("There is no albums Object!");
    return [];
  } else {
    return albumsObject.map((item, index) => {
      return {
        id: index,
        name: item.name,
        year: item.release_date,
        image:
          item.image && item.images[1] ? item.images[1].url : "default-URL",
      };
    });
  }
}

export function trackCnt(albumsObject) {
  if (!Array.isArray(albumsObject)) {
    console.error("There is no album object");
    return 0;
  } else {
    const albumTrack = albumsObject.map((item) => {
      return item.total_tracks;
    });
    return albumTrack.reduce((acc, curr) => acc + curr, 0);
  }
}

export function tracksPerAlb(albumsObject) {
  if (!Array.isArray(albumsObject)) {
    console.error("There is no albums object");
    return [];
  } else {
    return albumsObject.map((item, index) => {
      return {
        id: index,
        name: item.name,
        total_tracks: item.total_tracks,
      };
    });
  }
}
