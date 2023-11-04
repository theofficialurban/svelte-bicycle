import { SvelteComponent } from "svelte";
import type BicycleCard from "../../../types/BicycleCard";
declare const __propDef: {
    props: {
        BicycleCardFace?: {
            new (options: import("svelte").ComponentConstructorOptions<{
                store: BicycleCard["Store"];
                class: string;
            }>): {
                [prop: string]: any;
                $$prop_def: {
                    store: BicycleCard["Store"];
                    class: string;
                };
                $$events_def: {};
                $$slot_def: {};
                $capture_state(): void;
                $inject_state(): void;
                $$: any;
                $$set: any;
                $destroy(): void;
                $on<K extends never>(type: K, callback: ((e: {}[K]) => void) | null | undefined): () => void;
                $set(props: Partial<{
                    store: BicycleCard["Store"];
                    class: string;
                }>): void;
            };
        } | undefined;
        store: BicycleCard["Store"];
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'value-l': {};
        'value-r': {};
        'bottom-l': {};
        'bottom-r': {};
    };
};
export type BicycleCardFaceProps = typeof __propDef.props;
export type BicycleCardFaceEvents = typeof __propDef.events;
export type BicycleCardFaceSlots = typeof __propDef.slots;
export default class BicycleCardFace extends SvelteComponent<BicycleCardFaceProps, BicycleCardFaceEvents, BicycleCardFaceSlots> {
    get BicycleCardFace(): {
        new (options: import("svelte").ComponentConstructorOptions<{
            store: import("svelte/store").Writable<{
                _id: number;
                _image: string;
                _value: number;
                _status: "FACEDOWN" | "FACEUP";
                _cover?: string | undefined;
                _svgGraphic?: SvelteComponent<any, any, any> | undefined;
            }>;
            class: string;
        }>): {
            [prop: string]: any;
            $$prop_def: {
                store: import("svelte/store").Writable<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                    _svgGraphic?: SvelteComponent<any, any, any> | undefined;
                }>;
                class: string;
            };
            $$events_def: {};
            $$slot_def: {};
            $capture_state(): void;
            $inject_state(): void;
            $$: any;
            $$set: any;
            $destroy(): void;
            $on<K extends never>(type: K, callback: ((e: {}[K]) => void) | null | undefined): () => void;
            $set(props: Partial<{
                store: import("svelte/store").Writable<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                    _svgGraphic?: SvelteComponent<any, any, any> | undefined;
                }>;
                class: string;
            }>): void;
        };
    };
}
export {};
