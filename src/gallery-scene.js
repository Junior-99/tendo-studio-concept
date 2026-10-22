import * as T from 'three';
export function createGallery(host,images){
 const scene=new T.Scene();scene.background=new T.Color('#162dd2');scene.fog=new T.Fog('#162dd2',15,55);
 const camera=new T.PerspectiveCamera(52,1,.1,100);camera.position.set(0,0,8);
 const renderer=new T.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.toneMapping=T.ACESFilmicToneMapping;host.appendChild(renderer.domElement);
 scene.add(new T.HemisphereLight('#fff5e6','#111636',3));const key=new T.DirectionalLight('#ffffff',3);key.position.set(2,5,5);scene.add(key);
 const textures=[],loader=new T.TextureLoader(),frameMat=new T.MeshStandardMaterial({color:'#17191a',roughness:.32,metalness:.3});
 const objects=[];images.slice(0,12).forEach((item,i)=>{const group=new T.Group(),side=i%2===0?-1:1;const ratio=item.width/item.height,w=ratio>1?3.9:2.7,h=w/ratio;group.position.set(side*2.7,(i%3-1)*.55,-i*5.1);group.rotation.y=side*-.17;
 const back=new T.Mesh(new T.BoxGeometry(w+.16,h+.16,.12),frameMat);group.add(back);const texture=loader.load(item.image);texture.colorSpace=T.SRGBColorSpace;textures.push(texture);const picture=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:texture,side:T.DoubleSide}));picture.position.z=.075;group.add(picture);scene.add(group);objects.push(group);});
 const ground=new T.Mesh(new T.PlaneGeometry(100,150),new T.MeshStandardMaterial({color:'#1022a5',roughness:.24,metalness:.4}));ground.rotation.x=-Math.PI/2;ground.position.set(0,-3,-25);scene.add(ground);
 const lines=new T.GridHelper(100,30,'#5469fb','#223bcf');lines.position.y=-2.99;scene.add(lines);
 let frame,visible=true,manual=0,dragging=false,last=0;const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const resize=new ResizeObserver(()=>{const b=host.getBoundingClientRect();if(!b.height||!b.width)return;camera.aspect=b.width/b.height;camera.updateProjectionMatrix();renderer.setSize(b.width,b.height);});resize.observe(host);
 const observer=new IntersectionObserver(es=>visible=es[0].isIntersecting);observer.observe(host);
 const down=e=>{dragging=true;last=e.clientX;host.setPointerCapture(e.pointerId);};const move=e=>{if(dragging){manual=T.MathUtils.clamp(manual+(e.clientX-last)*.002,-.55,.55);last=e.clientX;}};const up=()=>dragging=false;host.addEventListener('pointerdown',down);host.addEventListener('pointermove',move);host.addEventListener('pointerup',up);host.addEventListener('pointercancel',up);
 const section=host.closest('.gallery-journey');function tick(){frame=requestAnimationFrame(tick);if(!visible||document.hidden)return;const progress=reduce?0:T.MathUtils.clamp((scrollY-section.offsetTop)/(section.offsetHeight-innerHeight),0,1);const targetZ=8-progress*54;camera.position.z+=(targetZ-camera.position.z)*.075;camera.position.x+=(Math.sin(progress*Math.PI*5)*.8+manual-camera.position.x)*.06;camera.lookAt(camera.position.x*.25,0,camera.position.z-9);objects.forEach((o,i)=>{o.rotation.z=reduce?0:Math.sin(progress*4+i)*.025;});renderer.render(scene,camera);}tick();
 return()=>{cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();host.removeEventListener('pointerdown',down);host.removeEventListener('pointermove',move);host.removeEventListener('pointerup',up);host.removeEventListener('pointercancel',up);scene.traverse(o=>{o.geometry?.dispose();if(o.material)[].concat(o.material).forEach(m=>m.dispose());});textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
}
