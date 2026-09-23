const pathSegments = location.pathname.split('/').filter(Boolean);
const repoSubpath = (location.hostname.includes('github.io') && pathSegments.length > 0) 
  ? '/' + pathSegments[0] + '/' 
  : '/';

self.__uv$config = {
    prefix: repoSubpath + 'uv/service/',
    bare: 'https://bare-server-y5ch.onrender.com/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.7/dist/uv.handler.js',
    client: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.7/dist/uv.client.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.7/dist/uv.bundle.js',
    config: repoSubpath + 'uv.config.js',
    sw: repoSubpath + 'sw.js',
};
