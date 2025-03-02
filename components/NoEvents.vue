<template>
    <div class="no-events-container">
        <p>
        V tuhle chvíli nejsou naplánovány žádné události.
        </p>
        <p>
        Pro více informací mě sledujte na sociálních sítích
        <NuxtLink :to="socialLinks.facebook.link" >
            <NuxtImg :src="socialLinks.facebook.icon" width="20" height="20" class="icon" />
            Facebook
        </NuxtLink>
        a
        <NuxtLink :to="socialLinks.instagram.link" >
            <NuxtImg :src="socialLinks.instagram.icon" width="20" height="20" class="icon" />
            Instagram
        </NuxtLink>
        , nebo mi napište  
        <NuxtLink :to="socialLinks.mail.link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
            </svg>
            {{ socialLinks.mail.label }}
        </NuxtLink>
        pro individuální služby.
        </p>
    </div>
</template>

<script setup>
import { socialLinks } from '@/utils/navigation';
</script>

<style lang="scss" scoped>
.no-events-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    max-width: 600px;
    padding: 1rem;
    
    background: transparent;
    border: 0.5px solid $gray;
    border-radius: 10px;
    
    font-size: 1.2rem;
    
    p {
    text-align: center;
    }
}

a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
    line-height: 1; 

    &:hover {
        text-decoration: underline;
    }
}

.icon {
    width: 20px;
    height: 20px;
}
</style>
