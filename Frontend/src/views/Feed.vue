<template>
  <div class="feed-layout">
    <SidebarFeed
      :user="user"
      :isSidebarCollapsed="isSidebarCollapsed"
      :activeSection="activeSection"
      @toggle-sidebar="toggleSidebar"
      @update:activeSection="val => activeSection = val"
    />
    <!--
    <div class="feed-main">
      <NavbarFeed @go-back="goBackToApp" :user="user" />
      <div class="feed-header">
        <form class="new-post-form" @submit.prevent="addPost">
          <div class="new-post-top">
            <img class="avatar" :src="user.avatar" alt="avatar" />
            <textarea v-model="newPostContent" placeholder="¿Qué quieres compartir?" rows="3" required></textarea>
          </div>
          <div class="new-post-actions">
            <label class="image-upload-btn">
              <input type="file" accept="image/*" @change="onImageChange" style="display:none" />
              <i class="bx bx-image"></i> Imagen
            </label>
            <div v-if="newPostImageUrl" class="image-preview">
              <img :src="newPostImageUrl" alt="preview" />
              <button type="button" class="remove-img-btn" @click="newPostImage = null; newPostImageUrl = ''">&times;</button>
            </div>
            <button class="btn btn-primary" type="submit">Publicar</button>
          </div>
        </form>
      </div>
      <transition-group name="fade-list" tag="div" class="feed-list">
        <div v-for="post in posts" :key="post.id" class="feed-post">
          <div class="post-header">
            <img class="avatar" :src="post.user.avatar" alt="avatar" />
            <div class="post-user-info">
              <span class="post-user">{{ post.user.name }}</span>
              <span class="post-date">{{ post.date || '' }}</span>
            </div>
            <div v-if="post.user.uid === user.uid" class="post-actions-right">
              <button class="btn-icon" @click="startEditPost(post)"><i class="bx bx-edit"></i></button>
              <button class="btn-icon" @click="deletePost(post.id)"><i class="bx bx-trash"></i></button>
            </div>
          </div>
          <div class="post-content" @click="openModal(post)">
            <template v-if="editingPostId === post.id">
              <textarea v-model="editPostContent" rows="3" class="edit-textarea"></textarea>
              <div class="edit-actions">
                <button class="btn btn-primary" @click.stop="saveEditPost(post)">Guardar</button>
                <button class="btn btn-accent" @click.stop="cancelEditPost">Cancelar</button>
              </div>
            </template>
            <template v-else>
              <p>{{ post.content }}</p>
              <img v-if="post.image" :src="post.image" class="post-img" alt="imagen de publicación" />
            </template>
          </div>
          <div class="post-actions">
            <button v-for="reaction in reactions" :key="reaction.type" class="reaction-btn"
              :class="{ selected: post.userReaction === reaction.type, bounce: bounceReactionId === post.id + '-' + reaction.type }"
              @click="reactWithBounce(post.id, reaction.type)">
              <span :aria-label="reaction.label">{{ reaction.emoji }}</span>
              <span v-if="post.reactions[reaction.type]">{{ post.reactions[reaction.type] }}</span>
            </button>
          </div>
          <transition-group name="fade-list" tag="div" class="post-comments">
            <div v-for="comment in post.comments" :key="comment.id" class="comment">
              <img class="avatar avatar-sm" :src="comment.avatar" alt="avatar" />
              <div class="comment-body">
                <template v-if="editingCommentId === comment.id">
                  <input v-model="editCommentContent" class="edit-comment-input" />
                  <div class="edit-actions">
                    <button class="btn btn-primary" @click.stop="saveEditComment(post, comment)">Guardar</button>
                    <button class="btn btn-accent" @click.stop="cancelEditComment">Cancelar</button>
                  </div>
                </template>
                <template v-else>
                  <span class="comment-user">{{ comment.user }}</span>
                  <span class="comment-text">{{ comment.text }}</span>
                  <span v-if="comment.uid === user.uid" class="comment-actions">
                    <button class="btn-icon" @click.stop="startEditComment(comment)"><i class="bx bx-edit"></i></button>
                    <button class="btn-icon" @click.stop="deleteComment(post, comment)"><i class="bx bx-trash"></i></button>
                  </span>
                </template>
              </div>
            </div>
          </transition-group>
          <form class="add-comment-form" @submit.prevent="addComment(post.id)">
            <input v-model="commentInputs[post.id]" placeholder="Agrega un comentario..." />
            <button type="submit" class="btn btn-accent">Comentar</button>
          </form>
        </div>
      </transition-group>
      <transition name="fade-modal">
        <div v-if="modalPost" class="modal-feed" @click.self="closeModal">
          <div class="modal-feed-content">
            <button class="modal-close" @click="closeModal">&times;</button>
            <div class="post-header">
              <img class="avatar" :src="modalPost.user.avatar" alt="avatar" />
              <div class="post-user-info">
                <span class="post-user">{{ modalPost.user.name }}</span>
                <span class="post-date">{{ modalPost.date || '' }}</span>
              </div>
              <div v-if="modalPost.user.uid === user.uid" class="post-actions-right">
                <button class="btn-icon" @click="startEditPost(modalPost, true)"><i class="bx bx-edit"></i></button>
                <button class="btn-icon" @click="deletePost(modalPost.id, true)"><i class="bx bx-trash"></i></button>
              </div>
            </div>
            <div class="post-content">
              <template v-if="editingPostId === modalPost.id">
                <textarea v-model="editPostContent" rows="3" class="edit-textarea"></textarea>
                <div class="edit-actions">
                  <button class="btn btn-primary" @click.stop="saveEditPost(modalPost, true)">Guardar</button>
                  <button class="btn btn-accent" @click.stop="cancelEditPost">Cancelar</button>
                </div>
              </template>
              <template v-else>
                <p>{{ modalPost.content }}</p>
                <img v-if="modalPost.image" :src="modalPost.image" class="post-img" alt="imagen de publicación" />
              </template>
            </div>
            <div class="post-actions">
              <button v-for="reaction in reactions" :key="reaction.type" class="reaction-btn"
                :class="{ selected: modalPost.userReaction === reaction.type, bounce: bounceReactionId === modalPost.id + '-' + reaction.type }"
                @click="reactWithBounce(modalPost.id, reaction.type, true)">
                <span :aria-label="reaction.label">{{ reaction.emoji }}</span>
                <span v-if="modalPost.reactions[reaction.type]">{{ modalPost.reactions[reaction.type] }}</span>
              </button>
            </div>
            <transition-group name="fade-list" tag="div" class="post-comments">
              <div v-for="comment in modalPost.comments" :key="comment.id" class="comment">
                <img class="avatar avatar-sm" :src="comment.avatar" alt="avatar" />
                <div class="comment-body">
                  <template v-if="editingCommentId === comment.id">
                    <input v-model="editCommentContent" class="edit-comment-input" />
                    <div class="edit-actions">
                      <button class="btn btn-primary" @click.stop="saveEditComment(modalPost, comment, true)">Guardar</button>
                      <button class="btn btn-accent" @click.stop="cancelEditComment">Cancelar</button>
                    </div>
                  </template>
                  <template v-else>
                    <span class="comment-user">{{ comment.user }}</span>
                    <span class="comment-text">{{ comment.text }}</span>
                    <span v-if="comment.uid === user.uid" class="comment-actions">
                      <button class="btn-icon" @click.stop="startEditComment(comment)"><i class="bx bx-edit"></i></button>
                      <button class="btn-icon" @click.stop="deleteComment(modalPost, comment, true)"><i class="bx bx-trash"></i></button>
                    </span>
                  </template>
                </div>
              </div>
            </transition-group>
            <form class="add-comment-form" @submit.prevent="addComment(modalPost.id, true)">
              <input v-model="commentInputs[modalPost.id]" placeholder="Agrega un comentario..." />
              <button type="submit" class="btn btn-accent">Comentar</button>
            </form>
          </div>
        </div>
      </transition>
    </div>
  -->



  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import NavbarFeed from '../components/NavbarFeed.vue';
import SidebarFeed from '../components/SidebarFeed.vue';
import { useRouter } from 'vue-router';
import { auth, db, storage } from '../../firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';

const router = useRouter();
const user = ref({ name: 'Usuario', avatar: 'https://ui-avatars.com/api/?name=Usuario&background=6366f1&color=fff', uid: null });
const posts = ref([]);
const newPostContent = ref('');
const newPostImage = ref(null);
const newPostImageUrl = ref('');
const commentInputs = reactive({});
const modalPost = ref(null);
const editingPostId = ref(null);
const editPostContent = ref('');
const editingCommentId = ref(null);
const editCommentContent = ref('');
const bounceReactionId = ref('');
const isSidebarCollapsed = ref(false);
const activeSection = ref('feed');
function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
}

const reactions = [
  { type: 'like', emoji: '👍', label: 'Me gusta' },
  { type: 'love', emoji: '❤️', label: 'Me encanta' },
  { type: 'laugh', emoji: '😂', label: 'Me divierte' },
  { type: 'wow', emoji: '😮', label: 'Me asombra' },
  { type: 'sad', emoji: '😢', label: 'Me entristece' },
  { type: 'angry', emoji: '😡', label: 'Me enoja' },
];

const toasts = ref([]);
let toastId = 0;
function showToast(message, type = 'info') {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    background: '#fff',
    color: '#222',
    customClass: {
      popup: 'swal2-toast-custom',
    },
  });
}
function removeToast(id) {
  toasts.value = toasts.value.filter(t => t.id !== id);
}

onMounted(() => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    user.value.name = currentUser.displayName || 'Usuario';
    user.value.avatar = currentUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.value.name)}&background=6366f1&color=fff`;
    user.value.uid = currentUser.uid;
  } else {
    auth.onAuthStateChanged(u => {
      if (u) {
        user.value.name = u.displayName || 'Usuario';
        user.value.avatar = u.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.value.name)}&background=6366f1&color=fff`;
        user.value.uid = u.uid;
      }
    });
  }
  // Escuchar publicaciones en tiempo real
  const postsQuery = query(collection(db, 'feed_posts'), orderBy('createdAt', 'desc'));
  onSnapshot(postsQuery, snapshot => {
    const prevPosts = posts.value.map(p => ({ ...p }));
    posts.value = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        comments: data.comments || [],
        reactions: data.reactions || {},
        userReaction: data.userReactions && user.value.uid ? data.userReactions[user.value.uid] : null,
      };
    });
    // Detectar notificaciones
    nextTick(() => {
      posts.value.forEach(post => {
        if (post.user && post.user.uid === user.value.uid) {
          // Buscar cambios en comentarios
          const prev = prevPosts.find(p => p.id === post.id);
          if (prev) {
            if (post.comments.length > prev.comments.length) {
              const newComment = post.comments[post.comments.length - 1];
              if (newComment && newComment.uid !== user.value.uid) {
                showToast(`Nuevo comentario en tu publicación: "${newComment.text}"`, 'success');
              }
            }
            // Buscar cambios en reacciones
            const prevReacts = prev.reactions || {};
            const currReacts = post.reactions || {};
            const prevSum = Object.values(prevReacts).reduce((a, b) => a + b, 0);
            const currSum = Object.values(currReacts).reduce((a, b) => a + b, 0);
            if (currSum > prevSum) {
              showToast('¡Alguien reaccionó a tu publicación!', 'info');
            }
          }
        }
      });
    });
  });
});

function onImageChange(e) {
  const file = e.target.files[0];
  if (file) {
    newPostImage.value = file;
    const reader = new FileReader();
    reader.onload = (ev) => {
      newPostImageUrl.value = ev.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    newPostImage.value = null;
    newPostImageUrl.value = '';
  }
}

async function addPost() {
  if (!newPostContent.value.trim() && !newPostImage.value) return;
  let imageUrl = '';
  if (newPostImage.value) {
    const file = newPostImage.value;
    const storagePath = `feed_images/${user.value.uid}_${Date.now()}_${file.name}`;
    const imgRef = storageRef(storage, storagePath);
    await uploadBytes(imgRef, file);
    imageUrl = await getDownloadURL(imgRef);
  }
  await addDoc(collection(db, 'feed_posts'), {
    user: {
      name: user.value.name,
      avatar: user.value.avatar,
      uid: user.value.uid,
    },
    content: newPostContent.value,
    createdAt: serverTimestamp(),
    comments: [],
    reactions: {},
    userReactions: {},
    image: imageUrl,
  });
  newPostContent.value = '';
  newPostImage.value = null;
  newPostImageUrl.value = '';
}

async function reactToPost(postId, type, isModal = false) {
  const post = posts.value.find(p => p && p.id === postId);
  if (!post || !user.value.uid) return;
  const postRef = doc(db, 'feed_posts', postId);
  // Lógica: solo una reacción por usuario
  const prevReaction = post.userReactions && post.userReactions[user.value.uid];
  let newReactions = { ...post.reactions };
  let newUserReactions = { ...post.userReactions };
  if (prevReaction && prevReaction !== type) {
    if (newReactions[prevReaction]) {
      newReactions[prevReaction]--;
      if (newReactions[prevReaction] === 0) delete newReactions[prevReaction];
    }
  }
  if (prevReaction === type) {
    if (newReactions[type]) {
      newReactions[type]--;
      if (newReactions[type] === 0) delete newReactions[type];
    }
    delete newUserReactions[user.value.uid];
  } else {
    if (!newReactions[type]) newReactions[type] = 0;
    newReactions[type]++;
    newUserReactions[user.value.uid] = type;
  }
  await updateDoc(postRef, {
    reactions: newReactions,
    userReactions: newUserReactions,
  });
}

async function addComment(postId, isModal = false) {
  const text = commentInputs[postId];
  if (!text || !text.trim()) return;
  const postRef = doc(db, 'feed_posts', postId);
  const post = posts.value.find(p => p && p.id === postId);
  if (!post) return;
  const newComment = {
    id: Date.now(),
    user: user.value.name,
    avatar: user.value.avatar,
    text,
    uid: user.value.uid,
    createdAt: new Date().toISOString(),
  };
  const updatedComments = [...(post.comments || []), newComment];
  await updateDoc(postRef, {
    comments: updatedComments,
  });
  commentInputs[postId] = '';
}

function openModal(post) {
  modalPost.value = JSON.parse(JSON.stringify(post));
}
function closeModal() {
  modalPost.value = null;
}

function goBackToApp() {
  router.push('/dashboard');
}

function startEditPost(post, isModal = false) {
  editingPostId.value = post.id;
  editPostContent.value = post.content;
}
function cancelEditPost() {
  editingPostId.value = null;
  editPostContent.value = '';
}
async function saveEditPost(post, isModal = false) {
  if (!editPostContent.value.trim()) return;
  const postRef = doc(db, 'feed_posts', post.id);
  await updateDoc(postRef, { content: editPostContent.value });
  editingPostId.value = null;
  editPostContent.value = '';
  if (isModal && modalPost.value) modalPost.value.content = editPostContent.value;
}
async function deletePost(postId, isModal = false) {
  if (!window.confirm('¿Seguro que quieres eliminar esta publicación?')) return;
  await deleteDoc(doc(db, 'feed_posts', postId));
  if (isModal) closeModal();
}
function startEditComment(comment) {
  editingCommentId.value = comment.id;
  editCommentContent.value = comment.text;
}
function cancelEditComment() {
  editingCommentId.value = null;
  editCommentContent.value = '';
}
async function saveEditComment(post, comment, isModal = false) {
  if (!editCommentContent.value.trim()) return;
  const postRef = doc(db, 'feed_posts', post.id);
  const updatedComments = post.comments.map(c =>
    c.id === comment.id ? { ...c, text: editCommentContent.value } : c
  );
  await updateDoc(postRef, { comments: updatedComments });
  editingCommentId.value = null;
  editCommentContent.value = '';
  if (isModal && modalPost.value) modalPost.value.comments = updatedComments;
}
async function deleteComment(post, comment, isModal = false) {
  if (!window.confirm('¿Seguro que quieres eliminar este comentario?')) return;
  const postRef = doc(db, 'feed_posts', post.id);
  const updatedComments = post.comments.filter(c => c.id !== comment.id);
  await updateDoc(postRef, { comments: updatedComments });
  if (isModal && modalPost.value) modalPost.value.comments = updatedComments;
}

function reactWithBounce(postId, type, isModal = false) {
  bounceReactionId.value = postId + '-' + type;
  setTimeout(() => { bounceReactionId.value = ''; }, 500);
  reactToPost(postId, type, isModal);
}
</script>

<script>
// Toast.vue (componente simple)
export default {
  props: ['message', 'type'],
  emits: ['close'],
  template: `
    <div :class="['toast', type]">
      <span>{{ message }}</span>
      <button class="toast-close" @click="$emit('close')">&times;</button>
    </div>
  `
}
</script>

<style scoped>
html, body {
  overflow: hidden !important;
  height: 100vh !important;
}
.feed-layout {
  height: 92vh;
  width: 100%;
  max-width: none;
  margin: 0;
  display: flex;
}
.feed-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 92vh;
  background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
  box-shadow: none;
  align-items: center;
  justify-content: flex-start;
  padding: 88px 40px 40px 40px;
  margin: 0;
  overflow: hidden !important;
}
.feed-full {
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  background: var(--background-secondary, #f8fafc);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feed-header {
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
}
.new-post-form {
  background: var(--background, #fff);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow, rgba(0,0,0,0.08));
  padding: 1.5rem;
  border: 1px solid var(--border-color, #e2e8f0);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.new-post-top {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  background: #e0e7ff;
}
.avatar-sm {
  width: 32px;
  height: 32px;
}
.new-post-form textarea {
  border-radius: 8px;
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.75rem;
  font-size: 1rem;
  resize: vertical;
  width: 100%;
}
.new-post-actions {
  display: flex;
  justify-content: flex-end;
}
.feed-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 600px;
}
.feed-post {
  background: var(--background, #fff);
  border-radius: 16px;
  box-shadow: 0 2px 12px var(--shadow, rgba(0,0,0,0.10));
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border: 1px solid var(--border-color, #e2e8f0);
  transition: box-shadow 0.2s;
  cursor: pointer;
}
.feed-post:hover {
  box-shadow: 0 6px 24px var(--shadow-hover, rgba(99,102,241,0.12));
}
.post-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.post-user-info {
  display: flex;
  flex-direction: column;
}
.post-user {
  font-weight: 600;
  color: var(--primary, #6366f1);
}
.post-date {
  font-size: 0.85rem;
  color: var(--secondary, #64748b);
}
.post-content {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  word-break: break-word;
}
.post-actions {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  align-items: center;
}
.reaction-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.7rem;
  border-radius: 50px;
  transition: background 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
}
.reaction-btn.selected {
  background: var(--primary-light, #e0e7ff);
  box-shadow: 0 2px 8px var(--primary, #6366f1, 0.08);
  color: var(--primary, #6366f1);
}
.reaction-btn:hover {
  background: var(--primary-light, #e0e7ff);
}
.post-comments {
  border-top: 1px solid var(--border-color, #e2e8f0);
  padding-top: 0.75rem;
  background: var(--background-secondary, #f8fafc);
  border-radius: 0 0 12px 12px;
  margin-top: 0.5rem;
}
.comment {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-bottom: 0.5rem;
  font-size: 0.97rem;
}
.comment-body {
  background: #fff;
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.comment-user {
  font-weight: 600;
  margin-right: 0.5rem;
  color: var(--primary, #6366f1);
}
.add-comment-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.add-comment-form input {
  flex: 1;
  border-radius: 6px;
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}
.btn {
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}
.btn-primary {
  background: var(--primary, #6366f1);
  color: #fff;
}
.btn-primary:hover {
  background: var(--primary-dark, #4338ca);
}
.btn-accent {
  background: var(--accent, #06d6a0);
  color: #fff;
}
.btn-accent:hover {
  background: #059669;
}
/* Modal Feed */
.modal-feed {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-feed-content {
  background: #fff;
  border-radius: 18px;
  max-width: 500px;
  width: 95vw;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  z-index: 10;
}
.image-upload-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--primary-light, #e0e7ff);
  color: var(--primary, #6366f1);
  border-radius: 6px;
  padding: 0.3rem 0.8rem;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid var(--primary, #6366f1);
  transition: background 0.2s, color 0.2s;
}
.image-upload-btn:hover {
  background: var(--primary, #6366f1);
  color: #fff;
}
.image-preview {
  position: relative;
  display: inline-block;
  margin-right: 1rem;
}
.image-preview img {
  max-width: 80px;
  max-height: 80px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.remove-img-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}
.post-img {
  margin-top: 0.7rem;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.btn-icon {
  background: none;
  border: none;
  color: var(--secondary, #64748b);
  font-size: 1.1rem;
  margin-left: 0.2rem;
  cursor: pointer;
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  transition: background 0.2s, color 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-icon:hover {
  background: var(--primary-light, #e0e7ff);
  color: var(--primary, #6366f1);
}
.post-actions-right {
  display: flex;
  gap: 0.2rem;
  margin-left: auto;
}
.edit-textarea {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.75rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.edit-actions {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.edit-comment-input {
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 0.4rem 0.7rem;
  font-size: 1rem;
  margin-bottom: 0.3rem;
}
.comment-actions {
  margin-left: 0.5rem;
  display: inline-flex;
  gap: 0.2rem;
}
.fade-modal-enter-active, .fade-modal-leave-active {
  transition: opacity 0.3s;
}
.fade-modal-enter-from, .fade-modal-leave-to {
  opacity: 0;
}
.fade-list-enter-active, .fade-list-leave-active {
  transition: all 0.35s cubic-bezier(.4,2,.6,1);
}
.fade-list-enter-from, .fade-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.reaction-btn.bounce {
  animation: bounce 0.5s;
}
@keyframes bounce {
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  60% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
.toast {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  min-width: 220px;
  background: #fff;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  padding: 1rem 2.5rem 1rem 1rem;
  z-index: 3000;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.7rem;
  animation: fadeInToast 0.4s;
}
.toast.success {
  border-left: 5px solid #06d6a0;
}
.toast.info {
  border-left: 5px solid #6366f1;
}
.toast-close {
  background: none;
  border: none;
  color: #888;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: auto;
}
@keyframes fadeInToast {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.swal2-toast-custom {
  border-radius: 8px !important;
  box-shadow: 0 2px 12px rgba(0,0,0,0.13) !important;
  font-size: 1rem !important;
  min-width: 220px !important;
  padding: 1rem 2.5rem 1rem 1rem !important;
}
#theme-dark .feed-layout {
  background: linear-gradient(135deg, #181A20 0%, #23262F 100%) !important;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
}
#theme-dark .feed-main {
  background: linear-gradient(135deg, #23262F 0%, #181A20 100%) !important;
  border-radius: 20px 0 0 20px;
  color: #F1F1F1;
  box-shadow: none;
  padding: 88px 40px 40px 40px;
  overflow: hidden !important;
}
/* === INPUTS Y BOTONES ESTILO IACHAT === */
.new-post-form textarea,
.add-comment-form input {
  background: rgba(255,255,255,0.1);
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 15px 25px;
  color: #23262F;
  font-size: 1rem;
  outline: none;
  margin-bottom: 0.5rem;
  transition: background 0.2s, color 0.2s;
}
.new-post-form textarea::placeholder,
.add-comment-form input::placeholder {
  color: rgba(99,102,241,0.5);
}
.new-post-actions .btn,
.add-comment-form .btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 12px 28px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
}
.new-post-actions .btn:hover,
.add-comment-form .btn:hover {
  transform: scale(1.1);
}
#theme-dark .new-post-form textarea,
#theme-dark .add-comment-form input {
  background: rgba(79, 140, 255, 0.08) !important;
  color: #F1F1F1 !important;
  border: 1px solid #26334d !important;
}
#theme-dark .new-post-form textarea::placeholder,
#theme-dark .add-comment-form input::placeholder {
  color: #85C1E9 !important;
}
#theme-dark .new-post-actions .btn,
#theme-dark .add-comment-form .btn {
  background: linear-gradient(45deg, #4F8CFF, #06d6a0) !important;
  color: #181A20 !important;
}
#theme-dark .new-post-actions .btn:hover,
#theme-dark .add-comment-form .btn:hover {
  background: linear-gradient(45deg, #06d6a0, #4F8CFF) !important;
  color: #fff !important;
}
@media (max-width: 600px) {
  .feed-header, .feed-list, .modal-feed-content {
    max-width: 100vw;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .feed-post {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }
}
</style> 