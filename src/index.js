import { app, port } from './app';

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
  return 'Francisco Inoque';
});
