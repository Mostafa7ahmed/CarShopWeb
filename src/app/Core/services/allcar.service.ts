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

  /**
   * Fetch all car products
   * @returns Promise<any[]> - Array of car products or an empty array in case of an error
   */
  async getTableData(): Promise<any[]> {
    const { data, error } = await this.supabase.from('Car').select('*');
    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
    return data;
  }
}
