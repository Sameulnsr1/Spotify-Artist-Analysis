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
          item.images && item.images[1] ? item.images[1].url : "default-URL",
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
        release_date: item.release_date,
      };
    });
  }
}

export function albumsPerYear(albumsObject) {
  if (!Array.isArray(albumsObject)) {
    console.error("There is no ablums object");
    return [];
  } else {
    const groupByYear = albumsObject.reduce((accumulator, album) => {
      const year = album.release_date.slice(0, 4);
      if (!accumulator[year]) {
        accumulator[year] = { albumCount: 0, total_tracks: 0 };
      }
      accumulator[year].albumCount += 1;
      accumulator[year].total_tracks += album.total_tracks;

      return accumulator;
    }, {});
    return Object.entries(groupByYear).map((item) => {
      return {
        year: item[0],
        albumCount: item[1].albumCount,
        total_tracks: item[1].total_tracks,
      };
    });
  }
}
