import { supabase } from './supabase';

export type LeadEvent = {
    event_type: 'whatsapp_click' | 'roi_calc' | 'scroll_depth';
    source?: string;
    metadata?: Record<string, any>;
};

export const trackLeadEvent = async (event: LeadEvent) => {
    try {
        const { error } = await supabase
            .from('lead_events')
            .insert([
                {
                    event_type: event.event_type,
                    source: event.source || 'whatsapp_followup',
                    metadata: event.metadata || {},
                },
            ]);

        if (error) throw error;
    } catch (err) {
        console.error('Error tracking lead event:', err);
    }
};
