import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }


  async getTableData(filter?: { name?: string}): Promise<any[]> {
    try {
      let query = this.supabase.from('Slider').select('*');


      const { data, error } = await query;

      if (error) {
        console.error('Error fetching data:', error);
        return [];
      }

      return data || [];
    } catch (err) {
      console.error('Unexpected error:', err);
      return [];
    }
  }





}
