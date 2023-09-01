const wanado = {};

function importAll(arr) {
  arr.keys().forEach((key) => {
    Object.assign(wanado, arr(key));
  });
}

importAll(require.context('./sources/', true, /\.ts$/));

export default wanado;
