import ScrollService from '../services/ScrollService';

export default entries => (
  new ScrollService(Array.isArray(entries) ? entries : [entries]).activate()
);

