import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllcarService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getTableData(filter?: { name?: string; price_day?: number }): Promise<any[]> {
    try {
      let query = this.supabase.from('Car').select('*');
      if (filter) {
        if (filter.name) {
          query = query.eq('name', filter.name);
        }
        if (filter.price_day) {
          query = query.eq('price_day', filter.price_day);
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


  async getCar(carId: number): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .from('Car')
        .select('*')
        .eq('id', carId)
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
