<template>
<div 
class='fancy-cursor disabled position-fixed t-0 l-0 on-top d-none d-lg-block'
:class='{
    "not-hovered": !hovered,
}'>
    <div ref='outer'
         class='position-relative outer-wrapper w-100 h-100'>
        <div 
        ref='circle'
        class='circle cursor-element'>
            <div class='dot full-absolute' />
        </div>

        <div class='cursor-element border-element border-element--inner' />
        <div class='cursor-element border-element border-element--outer' />

    </div>
</div>

</template>

<script>
import { gsap } from 'gsap'

export default {
    name: 'fancy-cursor',

    watch: {
        mouse() {
            gsap.to(this.elements, {
                x: this.MouseObservable.mouseX,
                y: this.MouseObservable.mouseY,
                overwrite: 'auto',
                duration: 1,
                ease: 'Power4.easeOut',
                stagger: .0025
            })
        },

        hovered(active) {
            gsap.to(this.circles, {
                scale: active ? 1 : 0,
                opacity: active ? 1 : 0,
                duration: 1,
                ease: 'Power4.easeOut',
                overwrite: 'auto',
                stagger: .1,
            })
        },
    },

    mounted()  {
        this.elements = this.$el.querySelectorAll('.cursor-element')
        this.circles = this.$el.querySelectorAll('.border-element')

        gsap.set(this.elements, {
          x: this.MouseObservable.mouseX,
          y: this.MouseObservable.mouseY,
        })

        gsap.set(this.$refs.circle, {
            opacity: 1
        })
    },

    methods: {
    },

    computed: {
        mouse() {
            return `${this.MouseObservable.mouseX}+${this.MouseObservable.mouseY}`
        },

        hovered() {
            return this.MouseObservable.hovered
        },

        scale() {
            return this.hovered ? 3 
            : 1.5
        },
    }
}

</script>

<style lang="scss" scoped="">
.fancy-cursor {
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 999000;
    pointer-events: none;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    margin-left: -4px;
    transition: opacity 0.4s;

    .cursor-element{
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;

        &.border-element {
            opacity: 0;

            &--outer {
                width: 100px;
                height: 100px;
                border: 1px solid rgba(#AEFD54, .15);
            }

            &--inner {
                width: 70px;
                height: 70px;
                border: 1px solid rgba(#AEFD54, .4);
            }
        }
    }

    .circle {
        width: 100%;
        height: 100%;

        .dot {
            transition: transform .4s, background .4s;
            transform: scale(v-bind(scale));
            background: #AEFD54;
            border-radius: 50%;
        }
    }


}
</style>
