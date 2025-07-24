<template>
  <section class="section user-profile-section">
    <div class="container">
      <div class="profile-box" style="position:relative;">
        <button class="modal-close" @click="$emit('close')">&times;</button>
        <div class="profile-photo-wrapper">
          <img :src="user.photo ? user.photo : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'U')}&size=150`" :alt="`Foto de ${user.name}`" class="profile-photo" />
        </div>
        <h2 class="profile-title">{{ user.name }}</h2>
        <p class="profile-description">{{ user.bio }}</p>
        <button class="button is-success mt-2" @click="addFriend">Agregar como amigo</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const props = defineProps({ uid: String });
const emit = defineEmits(['close']);
const user = ref({ name: '', bio: '', photo: '' });

async function fetchUserProfile() {
  const uid = props.uid;
  if (!uid) return;
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    const data = userDoc.data();
    user.value.name = data.name || '';
    user.value.bio = data.bio || '';
    user.value.photo = data.photo || '';
  }
}

onMounted(fetchUserProfile);
watch(() => props.uid, fetchUserProfile);

function addFriend() {
  emit('close');
  setTimeout(() => {
    Swal.fire({
      icon: 'success',
      title: 'Solicitud enviada con satisfacción',
      showConfirmButton: false,
      timer: 2000
    });
  }, 200);
}
</script>

<style scoped>
.user-profile-section {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-navy, #f8fafc);
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-box {
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.10);
  padding: 3.5rem 3rem 3rem 3rem;
  background: #fff;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
.profile-photo-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}
.profile-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #6366f1;
  box-shadow: 0 4px 24px rgba(99,102,241,0.10);
  background: #f3f4f6;
}
.profile-title {
  font-size: 2rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}
.profile-description {
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.button.is-success {
  background: #06d6a0;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7em 2em;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.button.is-success:hover {
  background: #059669;
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
#theme-dark .profile-box {
  background: #23262F;
  color: #F1F1F1;
  border: 1.5px solid #4F8CFF;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.10);
}
#theme-dark .profile-title {
  color: #A3C8FF;
}
#theme-dark .profile-description {
  color: #85C1E9;
}
#theme-dark .button.is-success {
  background: linear-gradient(45deg, #4F8CFF, #06d6a0) !important;
  color: #181A20 !important;
}
#theme-dark .button.is-success:hover {
  background: linear-gradient(45deg, #06d6a0, #4F8CFF) !important;
  color: #fff !important;
}
#theme-dark .modal-close {
  color: #A3C8FF;
}
</style> 