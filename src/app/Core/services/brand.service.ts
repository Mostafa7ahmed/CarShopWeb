import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

   }


  
  async getTableData(filter?: { name?: string}): Promise<any[]> {
    try {
      let query = this.supabase.from('Brand').select('*');
      if (filter) {
        if (filter.name) {
          query = query.eq('name', filter.name);
        }
      }

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


  async getBarnd(BarndId: number): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .from('Brand')
        .select('*')
        .eq('id', BarndId)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (err) {
      console.error('Unexpected error:', err);
      throw err;
    }
  }
}
